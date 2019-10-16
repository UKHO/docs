# Adding Prometheus Metrics to Apis

- Add the following dependency to the POM (api level):
 <dependency>
            <groupId>io.micrometer</groupId>
            <artifactId>micrometer-registry-prometheus</artifactId>
            <version>${micrometer-prometheus.version}</version>
 </dependency>

- Add Prometheus endpoint to the monitoring endpoint declaration in the application.yml file:
management:
  endpoints:
    web:
      base-path: /monitor
      exposure:
        include: ["health", "info", "metrics", "httptrace", "prometheus"]

- Add the endpoint to the security configuration so that it allows unauthenticated access.
