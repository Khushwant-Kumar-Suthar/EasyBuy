package com.easybuy.easybuy_backend.repositories;

import com.easybuy.easybuy_backend.auth.entities.User;
import com.easybuy.easybuy_backend.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {

    List<Order> findByUser(User user);
}
