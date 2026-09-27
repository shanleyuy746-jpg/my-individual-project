#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double gross_salary;
    // Input
    cout << "Enter Gross Monthly Salary: ";
    cin >> gross_salary;

    // Calculations (Simplified standard rates)
    double sss = gross_salary * 0.045;
    double pagibig = gross_salary * 0.02;
    double bir_tax = gross_salary * 0.10;
    double total_deductions = sss + pagibig + bir_tax;
    double net_pay = gross_salary - total_deductions;

    // Output
    cout << fixed << setprecision(2);
    cout << "\n--- Payroll Summary ---\n";
    cout << "Gross Salary:     PHP " << gross_salary << "\n";
    cout << "SSS Deduction:    PHP " << sss << "\n";
    cout << "Pag-IBIG Ded.:    PHP " << pagibig << "\n";
    cout << "BIR Income Tax:   PHP " << bir_tax << "\n";
    cout << "Total Deductions: PHP " << total_deductions << "\n";
    cout << "Net Pay:          PHP " << net_pay << "\n";

    return 0;
}