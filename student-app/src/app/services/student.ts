import { Injectable, signal } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly students = signal<Student[]>([
    {
      id: 1,
      name: 'Aditya Bahadur',
      class: 'Class 9',
      gender: 'Male',
      hasHobby: true,
      hobby: 'Coding',
      favouriteSubject: 'Computer Science'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      class: 'Class 7',
      gender: 'Male',
      hasHobby: false,
      favouriteSubject: 'Mathematics'
    }
  ]);

  getStudents() {
    return this.students.asReadonly();
  }

  addStudent(student: Student) {
    this.students.update(currentList => [...currentList, student]);
  }
}