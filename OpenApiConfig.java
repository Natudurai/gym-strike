// package com.fitness.gym.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// import io.swagger.v3.oas.models.OpenAPI;
// import io.swagger.v3.oas.models.info.Info;
// import io.swagger.v3.oas.models.servers.Server;

// @Configuration
// public class OpenApiConfig {

//     @Bean
//     public OpenAPI defineApi() {
//         Server server = new Server();
//         server.setUrl("http://localhost:8080");
//         server.setDescription("Gym Training Application");

//         Info info = new Info().title("Gym Training and Application")
//                               .version("1.0")
//                               .description("Swagger testing phase");

//         return new OpenAPI().addServersItem(server).info(info);
//     }
// }

// package com.fitness.gym.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// import io.swagger.v3.oas.models.OpenAPI;
// import io.swagger.v3.oas.models.info.Info;
// import io.swagger.v3.oas.models.servers.Server;

// @Configuration
// public class OpenApiConfig {

//     @Bean
//     public OpenAPI defineApi() {
//         Server server = new Server();
//         server.setUrl("http://localhost:8080");
//         server.setDescription("Gym Training Application");

//         Info info = new Info().title("Gym Training and Application")
//                               .version("1.0")
//                               .description("Swagger testing phase");

//         return new OpenAPI().addServersItem(server).info(info);
//     }
// }


package com.fitness.gym.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.Components;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI defineApi() {
        
        Server server = new Server();
        server.setUrl("http://localhost:8080");
        server.setDescription("Gym Training Application");

        
        Info info = new Info()
            .title("Strike-GYM")
            .version("1.0")
            .description("Swagger testing phase");

        
        SecurityScheme securityScheme = new SecurityScheme()
            .type(SecurityScheme.Type.HTTP)
            .scheme("bearer")
            .bearerFormat("JWT")
            .in(SecurityScheme.In.HEADER)
            .name("Authorization");

        
        SecurityRequirement securityRequirement = new SecurityRequirement().addList("bearerAuth");

        
        return new OpenAPI()
            .addServersItem(server)
            .info(info)
            .components(new Components().addSecuritySchemes("bearerAuth", securityScheme))
            .addSecurityItem(securityRequirement);
    }
}
