import { Student } from '@store/models/student.model'

export class AddStudent {
    static readonly type = '[STUDENT] Add'

    constructor(public student: Student) { }
}

export class RemoveStudent {
    static readonly type = '[STUDENT] Remove'

    constructor(public id: number) { }
}