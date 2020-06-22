
import { Component, OnInit, NgModule } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddStudent, RemoveStudent } from '@store/actions/students.actions';
import { Student } from '@store/models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NGXS State Management';
  students$: Observable<Student[]>

  constructor(private store: Store) {
    this.students$ = this.store.select(state => state.students.students)
  }
  ngOnInit() {

  }
  addStudent(regId: number, name: string, address: string) {
    this.store.dispatch(new AddStudent({ regId: regId, name: name, address: address }))
  }

  delStudent(regId: number) {
    this.store.dispatch(new RemoveStudent(regId))
  }

}
