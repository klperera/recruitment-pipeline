# ---- Stage 1: Build the application ----
FROM maven:3.8.5-eclipse-temurin-17 AS build
WORKDIR /app

COPY . .

# Build the application (skip tests for speed)
RUN mvn clean package -DskipTests


FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copy the JAR from the builder stage
COPY --from=build /app/target/*.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
