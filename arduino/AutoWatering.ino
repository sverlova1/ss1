// Auto watering system for Arduino Mega

// Pump relay pin
const int PUMP_PIN = 8; // digital output controlling the relay

// Soil moisture sensor analog pin
const int SOIL_SENSOR_PIN = A0; // analog input

// Watering schedule (in milliseconds)
// Example: 6 AM and 6 PM: we will handle by simple intervals
const unsigned long WATER_INTERVAL = 12UL * 60UL * 60UL * 1000UL; // 12 hours

// Pump run duration (in milliseconds)
const unsigned long PUMP_DURATION = 10UL * 1000UL; // 10 seconds

// Soil moisture threshold (0-1023, where lower means wetter)
const int SOIL_THRESHOLD = 600;

unsigned long lastWaterTime = 0;

void setup() {
  pinMode(PUMP_PIN, OUTPUT);
  digitalWrite(PUMP_PIN, LOW); // ensure pump off

  Serial.begin(9600);
  lastWaterTime = millis();
}

void loop() {
  unsigned long currentTime = millis();
  int soilMoisture = analogRead(SOIL_SENSOR_PIN);

  Serial.print("Soil moisture: ");
  Serial.println(soilMoisture);

  bool timeToWater = (currentTime - lastWaterTime) >= WATER_INTERVAL;
  bool soilDry = soilMoisture > SOIL_THRESHOLD;

  if (timeToWater || soilDry) {
    Serial.println("Watering...");
    digitalWrite(PUMP_PIN, HIGH); // turn pump on
    delay(PUMP_DURATION);
    digitalWrite(PUMP_PIN, LOW); // turn pump off

    lastWaterTime = currentTime;
  }

  delay(1000); // minimal delay
}

