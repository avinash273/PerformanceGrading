package com.neural.PerformanceGrading;

import com.neural.PerformanceGrading.model.Student;
import com.neural.PerformanceGrading.service.StudentService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import java.util.List;

@SpringBootApplication
public class PerformanceGradingApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(PerformanceGradingApplication.class, args);

		StudentService service = context.getBean(StudentService.class);
		Student s1 = context.getBean(Student.class);

		s1.setId(1001);
		s1.setName("Steph");
		s1.setMarks(98);

		service.addStudent(s1);

		List<Student> students = service.getStudents();
		students.forEach(System.out::println);

	}

}
