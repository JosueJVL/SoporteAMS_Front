export class EmployeesModel{
    public Employee = new EmployeeModel();
    public IdEmployee: number;
    public IdNomina: string;
    public IdPuesto: number;
    public Name: string;
    public LastName: string;
    public SecondLastName: string;
    public RolEmployee = new RolesModel();
}

export class EmployeeModel{
    public IdEmployee: number;
    public IdNomina: string;
    public IdPuesto: number;
    public Name: string;
    public LastName: string;
    public SecondLastName: string;
}

export class RolesModel{
    public IdRol: number;
    public IdUser: number;
    public IsActivate: boolean;
    public NameRol: string;
}
