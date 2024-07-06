package com.neural.PerformanceGrading.repository;

import com.neural.PerformanceGrading.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class StudentRepository {

    private JdbcTemplate jdbc;

    public JdbcTemplate getJdbc() {
        return jdbc;
    }

    @Autowired
    public void setJdbc(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void save(Student student) {
        String query = "INSERT INTO students (id, name, marks) VALUES (?, ?, ?)";
        int rows = jdbc.update(query, student.getId(), student.getName(), student.getMarks());
        System.out.println("Inserted: " + rows);

        System.out.println("Saving student: " + student);
    }

    public List<Student> findAll() {
        String query = "SELECT * FROM students";

        return jdbc.query(query, (rs, rowNum) -> {
                    Student student = new Student();
                    student.setId(rs.getInt("id"));
                    student.setName(rs.getString("name"));
                    student.setMarks(rs.getInt("marks"));
                    return student;
                }
        );
    }
}
