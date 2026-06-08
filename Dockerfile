# ---- Build Stage ----

FROM maven:3.9.9-eclipse-temurin-25 AS build

WORKDIR /app

# Copy everything

COPY . .

# Build the application

RUN mvn clean package -DskipTests

# ---- Run Stage ----

FROM eclipse-temurin:25-jdk-jammy

WORKDIR /app

# Copy jar from build stage

COPY --from=build /app/target/*.jar app.jar

# Expose port (Render uses 10000 by default, but Spring Boot defaults to 8080)

EXPOSE 8080

# Run the app

ENTRYPOINT ["java", "-jar", "app.jar"]
