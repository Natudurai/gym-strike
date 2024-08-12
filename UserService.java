// package com.fitness.gym.service;

// import com.fitness.gym.model.User;
// import com.fitness.gym.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepository userRepository;

//       @Autowired
//     private PasswordEncoder passwordEncoder;


//     public void registerUser(User user) {
//         if (userRepository.findByEmail(user.getEmail()).isPresent()) {
//             throw new IllegalArgumentException("Email already in use");
//         }
//         userRepository.save(user);
//     }

//     public User authenticateUser(String email, String password) {
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

//         if (!user.getPassword().equals(password)) {
//             throw new IllegalArgumentException("Invalid email or password");
//         }
//         return user;
//     }

//     public List<User> getAllUsers() {
//         return userRepository.findAll();
//     }

//     public Optional<User> getUserById(Long id) {
//         return userRepository.findById(id);
//     }

//     public void updateUser(Long id, User updatedUser) {
//         User existingUser = userRepository.findById(id)
//                 .orElseThrow(() -> new IllegalArgumentException("User not found"));

//         existingUser.setName(updatedUser.getName());
//         existingUser.setDateOfBirth(updatedUser.getDateOfBirth());
//         existingUser.setGender(updatedUser.getGender());
//         existingUser.setEmail(updatedUser.getEmail());
//         existingUser.setPassword(updatedUser.getPassword());
        
//         userRepository.save(existingUser);
//     }

//     public void deleteUser(Long id) {
//         if (!userRepository.existsById(id)) {
//             throw new IllegalArgumentException("User not found");
//         }
//         userRepository.deleteById(id);
//     }
// }

package com.fitness.gym.service;

import com.fitness.gym.model.User;
import com.fitness.gym.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already in use");
        }
        // Encrypt the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public User authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        // Verify the password
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }
        return user;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public void updateUser(Long id, User updatedUser) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        existingUser.setName(updatedUser.getName());
        existingUser.setDateOfBirth(updatedUser.getDateOfBirth());
        existingUser.setGender(updatedUser.getGender());
        existingUser.setEmail(updatedUser.getEmail());
        // Do not update the password unless it is explicitly set
        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }
        
        userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new IllegalArgumentException("User not found");
        }
        userRepository.deleteById(id);
    }
}
