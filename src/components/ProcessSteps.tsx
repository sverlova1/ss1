import React from 'react';
import { ClipboardList, PenTool as Tool, CheckCircle, ArrowRight } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  isLastStep?: boolean;
}

const Step: React.FC<StepProps> = ({ icon, title, description, number, isLastStep = false }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 relative">
        {icon}
        
        {!isLastStep && (
          <div className="hidden md:block absolute top-1/2 left-full w-full border-t-2 border-dashed border-gray-300"></div>
        )}
      </div>
      
      <div className="text-center md:text-left">
        <div className="text-sm font-semibold text-blue-600 mb-1">Шаг {number}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList size={20} />,
      title: "Заказать ремонт",
      description: "Оставьте заявку онлайн или по телефону. Расскажите о проблеме с устройством, и мы предоставим предварительную оценку."
    },
    {
      icon: <Tool size={20} />,
      title: "Диагностика и ремонт",
      description: "Наши опытные мастера проведут диагностику устройства, подтвердят стоимость ремонта и выполнят его с использованием качественных запчастей."
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Получите устройство",
      description: "Заберите отремонтированное устройство с 90-дневной гарантией на все виды ремонта для вашего спокойствия."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наш простой процесс ремонта поможет быстро вернуть ваши устройства в рабочее состояние без лишних хлопот.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-4xl mx-auto relative">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={index + 1}
              isLastStep={index === steps.length - 1}
            />
          ))}
        </div>
        
        {/* Mobile arrows */}
        <div className="md:hidden flex justify-center my-4">
          <ArrowRight className="text-blue-600 transform rotate-90" size={24} />
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;