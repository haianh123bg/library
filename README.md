# HỆ THỐNG QUẢN LÝ THƯ VIỆN
## QUY TẮC LÀM VIỆC 
### Trước Mỗi Phiên Làm Việc
1. **Pull Code Mới Nhất:**
   - Đảm bảo bạn có phiên bản code mới nhất từ remote repository:
     ```bash
     git checkout <branch_name>
     git pull origin <branch_name>
     ```
     ## Trong Quá Trình Làm Việc

2. **Tạo và Di Chuyển Branch:**
   - Tạo branch mới để làm việc:
     ```bash
     git checkout -b feature-branch
     ```
   - Di chuyển giữa các branch:
     ```bash
     git checkout <branch_name>
     ```

3. **Thực Hiện Công Việc và Commit:**
   - Thực hiện thay đổi trong code, sau đó sử dụng `git add` và `git commit` để lưu các thay đổi vào local repository:
     ```bash
     git add <file_name>
     git commit -m "Description of changes"
     ```

## Trước Khi Merge Code

4. **Pull Request (PR):**
   - Push branch của bạn lên remote repository:
     ```bash
     git push origin feature-branch
     ```
   - Tạo Pull Request thông qua GitHub hoặc GitLab.
   - Chờ review và phản hồi từ người khác trước khi merge.

## Lưu Ý Quan Trọng

- Luôn giữ cho các commit nhỏ và có ý nghĩa.
- Viết message commit rõ ràng và mô tả đầy đủ về những thay đổi đã thực hiện.
- Luôn đảm bảo rằng code của bạn chạy mượt trước khi tạo Pull Request.
- Tuân thủ các quy tắc và tiêu chuẩn trong dự án hoặc nhóm làm việc.
