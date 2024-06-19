package com.haianh123.library.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbluser")
public class User implements UserDetails, Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;

    @Column(name = "user_name", nullable = false, length = 255)
    private String userName;

    @Column(name = "user_image", length = 255)
    private String userImage;

    @Column(name = "user_phone_number", length = 20)
    private String userPhoneNumber;

    @Column(name = "user_address", columnDefinition = "TEXT")
    private String userAddress;

    @Column(name = "user_account_name", nullable = false, length = 255, unique = true)
    private String userAccountName;

    @Column(name = "user_account_password", nullable = false, length = 255)
    private String userAccountPassword;

    @Column(name = "user_role", length = 50)
    private String userRole;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Column(name = "updated_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;

    @Column(name="user_active")
    private boolean userActive;

    @Column(name="key_active")
    private String keyActive;

    @Column(name = "user_money", precision = 10, scale = 0)
    private BigDecimal userMoney;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<BorrowingForm> borrowingForms;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<ReturnSlip> returnSlips;

    public User(int userId, String userName, String userAccountName, String userAccountPassword, String userRole) {
        this.userId = userId;
        this.userName = userName;
        this.userAccountName = userAccountName;
        this.userAccountPassword = userAccountPassword;
        this.userRole = userRole;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String role = "ROLE_" + userRole.toUpperCase(Locale.ROOT); // Định dạng vai trò theo chuẩn ROLE_
        return Collections.singletonList(new SimpleGrantedAuthority(role)); // Trả về danh sách các quyền
    }

    @Override
    public String getPassword() {
        return userAccountPassword; // Trả về mật khẩu của người dùng
    }

    @Override
    public String getUsername() {
        return userAccountName; // Trả về tên tài khoản của người dùng
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}





