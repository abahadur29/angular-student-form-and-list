# Angular Project – Student List and Add Student (Reactive Forms)

This project is built using Angular and includes the following functionality:
1. A Home page showing all students.
2. A left-side menu for navigation.
3. An Add Student page built using Reactive Forms.
4. Fields that show or hide dynamically using *ngIf.
5. The ability to add students to a list and display them on the home page.

---

## Additional Enhancements (Added by Me)

These improvements were added to make the application more user-friendly and polished:

1. Real-time Male/Female Count  
   A small counter on the home page automatically shows how many male and female students are currently added.

2. Name Capitalization Pipe  
   A custom pipe was created to automatically capitalize the first letter of student names for consistent formatting.

---

## Features Implemented

### 1. Home Page
- Shows the list of all students.
- Displays: Name, Class, Gender, Hobby (or "No hobby"), Favorite Subject.
- Preloaded with at least two sample students.

---

### 2. Navigation Menu
- Home (Student List)
- Add Student

---

### 3. Add Student – Reactive Form

| Field             | Type        | Validation / Logic                                |
|------------------|-------------|----------------------------------------------------|
| Name             | Text        | Required, Minimum 5 characters                     |
| Class            | Dropdown    | Required (6, 7, 8, 9)                              |
| Gender           | Radio       | Required                                           |
| Has Hobby        | Checkbox    | Default: No                                        |
| Hobby            | Text Input  | Visible only when Has Hobby is checked             |
| Favorite Subject | Dropdown    | Optional                                           |

---

### 4. Dynamic Messages (Using *ngIf*)

Displayed next to the Class dropdown based on selection:

- Class 6: "Welcome to middle school!"
- Class 9: "You will appear in board exams soon. All the Best !!"
- Class 7 or Class 8: "Education and hobby go hand in hand!"

---

### 5. Saving Students
- Clicking Save adds the student to the list.
- The user is redirected back to the Home page showing the updated list.

---

## How to Run

1. Install Dependencies
    ```bash
    npm install
    ```

2. Start the Development Server
    ```bash
    ng serve
    ```

3. Open in Browser
    Navigate to:
    ```
    http://localhost:4200
    ```

---

# Screenshots (Stored in `/screenshots`)

### Home Page
![Home](./screenshots/0%20Home%20Page%20Initial.png)

### Add Student Form
![Add](./screenshots/1%20Add%20Student%20Form.png)

### Validation and Class Logic
![Validation](./screenshots/2%20Name%20Validation%20Error.png)
![Class 6](./screenshots/3%20Class%206%20Logic.png)
![Class 7](./screenshots/4%20Class%207%20Logic.png)
![Class 8](./screenshots/5%20Class%208%20Logic.png)
![Class 9](./screenshots/6%20Class%209%20Logic.png)

### Hobby Logic
![Hobby](./screenshots/7%20Hobby%20Checkbox%20Logic.png)

### Disabled Save Button
![Disabled](./screenshots/8%20Save%20Button%20Disabled.png)

### Student Added Successfully
![Updated List](./screenshots/9%20List%20Updated%20with%20a%20student.png)

### Additional Screens
![Lowercase Test](./screenshots/10%20Lowercase%20Input%20Test.png)
![Final Dashboard](./screenshots/11%20Final%20Dashboard.png)
![VS Code Structure](./screenshots/12%20VS%20Code%20Structure.png)

---

## Project Completed
All required features have been implemented along with two additional enhancements for better usability.
