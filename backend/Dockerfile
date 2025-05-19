FROM openjdk:17-jdk-slim

LABEL authors="Kalpa"

WORKDIR /app

COPY target/*.jar app.jar

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]