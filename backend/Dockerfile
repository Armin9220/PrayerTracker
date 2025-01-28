FROM openjdk:17-jdk-slim
VOLUME /tmp
COPY target/backend-0.0.1-SNAPSHOT.jar backend.jar
ENTRYPOINT ["java", "-jar", "/backend.jar"]
