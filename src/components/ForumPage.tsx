import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, LogIn, LogOut, UserPlus, Reply, Trash, Edit, User, Shield } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ReactMarkdown from 'react-markdown';

interface Role {
  id: string;
  name: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
  user_email: string;
  name: string;
  comments?: Comment[];
}

interface Comment {
  id: number;
  content: string;
  post_id: number;
  user_id: string;
  user_email: string;
  name: string;
  created_at: string;
}

const ForumPage: React.FC = () => {
  const [session, setSession] = useState(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [editingComment, setEditingComment] = useState<{ id: number, content: string } | null>(null);
  const [userRoles, setUserRoles] = useState<string[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        setUserName(session.user.email.split('@')[0]);
        fetchUserRoles(session.user.id);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setUserName(session.user.email.split('@')[0]);
        fetchUserRoles(session.user.id);
      } else {
        setUserRoles([]);
      }
    });

    fetchPosts();

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserRoles = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('roles(name)')
        .eq('user_id', userId);

      if (error) throw error;

      setUserRoles(data?.map(role => role.roles.name) || []);
    } catch (error) {
      console.error('Error fetching user roles:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data: postsData, error: postsError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;

      const { data: commentsData, error: commentsError } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: true });

      if (commentsError) throw commentsError;

      const postsWithComments = postsData.map(post => ({
        ...post,
        comments: commentsData.filter(comment => comment.post_id === post.id)
      }));

      setPosts(postsWithComments || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    try {
      const { data, error } = await supabase.from('posts').insert([
        {
          title: newPost.title,
          content: newPost.content,
          user_id: session.user.id,
          user_email: session.user.email,
          name: userName,
        },
      ]);

      if (error) throw error;

      setNewPost({ title: '', content: '' });
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleCommentSubmit = async (postId: number) => {
    if (!session || !newComment.trim()) return;

    try {
      const { error } = await supabase.from('comments').insert([
        {
          content: newComment,
          post_id: postId,
          user_id: session.user.id,
          user_email: session.user.email,
          name: userName,
        },
      ]);

      if (error) throw error;

      setNewComment('');
      setReplyingTo(null);
      fetchPosts();
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  const handleCommentEdit = async (commentId: number, content: string) => {
    if (!session) return;

    try {
      const { error } = await supabase
        .from('comments')
        .update({ content })
        .eq('id', commentId);

      if (error) throw error;

      setEditingComment(null);
      fetchPosts();
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handleCommentDelete = async (commentId: number) => {
    if (!session) return;

    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;

      fetchPosts();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handlePostDelete = async (postId: number) => {
    if (!session) return;

    try {
      // Delete all comments first
      const { error: commentsError } = await supabase
        .from('comments')
        .delete()
        .eq('post_id', postId);

      if (commentsError) throw commentsError;

      // Then delete the post
      const { error: postError } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId);

      if (postError) throw postError;

      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (authMode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
      setShowAuthModal(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNameUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowNameModal(false);
    fetchPosts();
  };

  const canModerate = userRoles.some(role => ['admin', 'moderator'].includes(role));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Форум сообщества
            </h1>
            <p className="text-lg text-gray-600">
              Обсуждайте ремонт устройств, делитесь опытом и получайте помощь от других пользователей.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Обсуждения</h2>
            <div className="flex items-center space-x-4">
              {session && (
                <>
                  <div className="flex items-center">
                    {userRoles.includes('admin') && (
                      <Shield className="text-blue-600 mr-2" size={20} />
                    )}
                    {userRoles.includes('moderator') && (
                      <Shield className="text-green-600 mr-2" size={20} />
                    )}
                    <button
                      onClick={() => setShowNameModal(true)}
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      <User size={20} className="mr-2" />
                      {userName}
                    </button>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <LogOut size={20} className="mr-2" />
                    Выйти
                  </button>
                </>
              )}
              {!session && (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <LogIn size={20} className="mr-2" />
                  Войти
                </button>
              )}
            </div>
          </div>

          {session && (
            <form onSubmit={handleSubmit} className="mb-8 bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Заголовок
                </label>
                <input
                  type="text"
                  id="title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Содержание (поддерживается Markdown)
                </label>
                <textarea
                  id="content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send size={20} className="mr-2" />
                Опубликовать
              </button>
            </form>
          )}

          {loading ? (
            <div className="text-center py-8">Загрузка...</div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(post.created_at).toLocaleDateString('ru-RU')} • {post.name}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare size={20} className="text-gray-400" />
                      {(session?.user.id === post.user_id || canModerate) && (
                        <button
                          onClick={() => handlePostDelete(post.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="prose max-w-none mb-6">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  </div>

                  {/* Comments section */}
                  <div className="mt-6 space-y-4">
                    <h4 className="font-semibold text-gray-700">Комментарии</h4>
                    {post.comments?.map((comment) => (
                      <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-gray-500 mb-2">
                              {comment.name} • {new Date(comment.created_at).toLocaleDateString('ru-RU')}
                            </p>
                            {editingComment?.id === comment.id ? (
                              <div className="space-y-2">
                                <textarea
                                  value={editingComment.content}
                                  onChange={(e) => setEditingComment({ ...editingComment, content: e.target.value })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  rows={2}
                                />
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => handleCommentEdit(comment.id, editingComment.content)}
                                    className="text-sm text-blue-600 hover:text-blue-700"
                                  >
                                    Сохранить
                                  </button>
                                  <button
                                    onClick={() => setEditingComment(null)}
                                    className="text-sm text-gray-600 hover:text-gray-700"
                                  >
                                    Отмена
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <p className="text-gray-700">{comment.content}</p>
                            )}
                          </div>
                          {(session?.user.id === comment.user_id || canModerate) && (
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setEditingComment({ id: comment.id, content: comment.content })}
                                className="text-gray-500 hover:text-gray-700"
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                onClick={() => handleCommentDelete(comment.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {session && (replyingTo === post.id ? (
                      <div className="mt-4">
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Написать комментарий..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          rows={2}
                        />
                        <div className="mt-2 flex justify-end space-x-2">
                          <button
                            onClick={() => setReplyingTo(null)}
                            className="text-gray-600 hover:text-gray-700"
                          >
                            Отмена
                          </button>
                          <button
                            onClick={() => handleCommentSubmit(post.id)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Отправить
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => setReplyingTo(post.id)}
                        className="flex items-center text-blue-600 hover:text-blue-700 mt-2"
                      >
                        <Reply size={16} className="mr-1" />
                        Ответить
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">
              {authMode === 'signin' ? 'Вход' : 'Регистрация'}
            </h2>
            <form onSubmit={handleAuth}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Пароль
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  {authMode === 'signin' ? (
                    <>
                      <LogIn size={20} className="mr-2" />
                      Войти
                    </>
                  ) : (
                    <>
                      <UserPlus size={20} className="mr-2" />
                      Зарегистрироваться
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {authMode === 'signin'
                    ? 'Нет аккаунта? Зарегистрируйтесь'
                    : 'Уже есть аккаунт? Войдите'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAuthModal(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Закрыть
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showNameModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">Изменить имя</h2>
            <form onSubmit={handleNameUpdate}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Отображаемое имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  onClick={() => setShowNameModal(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumPage;