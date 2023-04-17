package com.pms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableDiscoveryClient
@EnableConfigServer
//@RefreshScope
public class G2ConfigServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(G2ConfigServiceApplication.class, args);
	}

}
