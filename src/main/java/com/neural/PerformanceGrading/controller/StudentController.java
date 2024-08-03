package com.neural.PerformanceGrading.controller;

import com.neural.PerformanceGrading.model.Student;
import com.neural.PerformanceGrading.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * http://localhost:8080/app/test
 */
@RestController
@RequestMapping("/app")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/test")
    public List<Student> getStudentService() {
        return studentService.getStudents();
    }


}
