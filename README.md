# NexaApply
# Front-End Routes

The following table outlines the routes available in the application along with their descriptions.

| Route                  | Page Name          | Description                                                                                     |
|------------------------|--------------------|-------------------------------------------------------------------------------------------------|
| `/`                    | Home Page          | Displays featured colleges, search, gallery, research papers, and reviews.                      |
| `/colleges`            | Colleges Page      | Lists all colleges with details like ratings, admission dates, research count, and a "Details" button. |
| `/colleges/:id`        | College Details Page | Displays detailed college information including admission process, events, research, and sports. |
| `/admission`           | Admission Page     | Displays available colleges; clicking on a college opens the admission form.                     |
| `/my-college`          | My College Page    | Shows applied college details and allows users to add reviews.                                  |
| `/profile`             | Profile Page       | Displays user profile with an edit option to update details.                                    |
| `/login`               | Login Page         | Users can log in using email-password, Google, or social media.                                 |
| `/register`            | Register Page      | Users can sign up.                                                                              |
| `/reset-password`      | Password Reset Page | Allows users to reset their passwords.                                                         |
| `/admin/dashboard`     | Admin Dashboard    | Displays an overview of colleges, users, and stats.                                             |
| `/admin/colleges`      | Manage Colleges    | Admin can add, update, or delete colleges.                                                      |
| `/admin/users`         | Manage Users       | Admin can view and delete users but cannot modify their data.                                   |
| `/admin/admins`        | Manage Admins      | Admin can add or remove admins (except their own account).                                      |

---

### Notes:
- Routes prefixed with `/admin` are accessible only to admin users.
- All other routes are accessible to general users or guests, depending on authentication requirements.