import { Student } from '@store/models/student.model';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { AddStudent, RemoveStudent } from '@store/actions/students.actions';

export class StudentStateModel {
    students: Student[];
}
@State<StudentStateModel>({
    name: 'students',
    defaults: {
        students: []
    }
})
export class StudentState {

    @Selector()
    static getStudents(state: StudentStateModel) {
        return state.students
    }

    @Action(AddStudent)
    add({ getState, patchState }: StateContext<StudentStateModel>, { student }: AddStudent) {
        const state = getState();
        patchState({
            students: [...state.students, student]
        })
    }

    @Action(RemoveStudent)
    remove({ getState, patchState }: StateContext<StudentStateModel>, { id }: RemoveStudent) {
        patchState({
            students: getState().students.filter(a => a.regId != id)
        })
    }

}