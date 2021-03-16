package com.todo.rest.webservices.restfulwebservices.helloworld;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller -  tell spring so that this will handle http/rest request
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

	//GET
	//URI - /hello-world
	//method - "Hello World"
	//to map get request to uri we can use @RequestMapping
	//@RequestMapping(method= RequestMethod.GET,path="/hello-world")
	
	//alternatively u can use @GetMapping
	
	//hello-world
	
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	
	/*WORKING OF FLOW 
	 * AutoConfigurationReports/logs - consist of 
	 * All this  getting fired because spring boot auto configuration.
	 * DispatcherServlet matched: i.e. found in classpath, configure if required.
	 * WhitelabelErrorViewConfiguration shows errror page
	 * HttpMessageConvertersAutoConofiguration resposnsible for converting from  bean into JSON
	 * Jackson2Object- convert bean to json
	 * 
	 * Mapping servelet: 'dispatcherServlet' to [/]
	 * dispatcher servelet knows all the different mapping present in the system
	 * it knows right controller to execute that requests.
	 * 
	 * When it looks at uri, it looks for right controller , it will find the specific method.
	 * NOw we have it, how do we send the response???
	 * USING @RestController, we send the response back.
	 * Message will be converted into json using jackson2object
	 * Return the response back...
	 * 
	 * 
	*/
	
	//hello-world-bean  this bean is automatically converted into json and return back
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some error has occured, contact support ***-***");
		return new HelloWorldBean("Hello World - Changed ");
	}
	
	///hello-world/path-variable/shubham with path parameter
	
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldBean(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s",name));
	}
}
