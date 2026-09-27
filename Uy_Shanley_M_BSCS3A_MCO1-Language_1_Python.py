# Input
gross_salary = float(input("Enter Gross Monthly Salary: "))

# Calculations (Simplified standard rates)
sss = gross_salary * 0.045
pagibig = gross_salary * 0.02
bir_tax = gross_salary * 0.10
total_deductions = sss + pagibig + bir_tax
net_pay = gross_salary - total_deductions

# Output
print("\n--- Payroll Summary ---")
print(f"Gross Salary:     PHP {gross_salary:.2f}")
print(f"SSS Deduction:    PHP {sss:.2f}")
print(f"Pag-IBIG Ded.:    PHP {pagibig:.2f}")
print(f"BIR Income Tax:   PHP {bir_tax:.2f}")
print(f"Total Deductions: PHP {total_deductions:.2f}")
print(f"Net Pay:          PHP {net_pay:.2f}")