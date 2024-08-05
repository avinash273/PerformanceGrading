FROM openjdk:22
LABEL authors="avinashshanker"
ARG JAR_FILE=target/*.jar
COPY ./target/PerformanceGrading-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

FROM postgres
ENV POSTGRES_PASSWORD password123
ENV POSTGRES_DB PerformanceGrading
#COPY ./src/main/resources/data.sql /docker-entrypoint-initdb.d/