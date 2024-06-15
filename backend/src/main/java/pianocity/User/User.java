package pianocity.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "User")
public class User {
        @Id
        @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
        @Column(name = "userID", updatable = false)
        private Long userID;

        @Column(name = "userName", nullable = false)
        private String userName;

        @Column(name = "userDateOfBirth", nullable = false)
        private Date userDateOfBirth;

        @Column(name = "userPhoneNumber")
        private String userPhoneNumber;

        @Column(name = "userAddress")
        private String userAddress;
}
