import { listEmployee } from "../service/Employee"

export default function Employee(){
    const employeeList = listEmployee();
    console.log(employeeList);
    return (
        <div className="bg-slate-300">
            <div>List Of Employees</div>
        </div>
    )
}