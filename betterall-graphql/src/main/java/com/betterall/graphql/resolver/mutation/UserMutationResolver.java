package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.DietType;
import com.betterall.graphql.domain.model.MealPlan;
import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.domain.dto.UserDto;
import com.betterall.graphql.repository.ConditionRepository;
import com.betterall.graphql.repository.MealPlanRepository;
import com.betterall.graphql.repository.UserRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class UserMutationResolver implements GraphQLMutationResolver {

    private final UserRepository userRepository;
    private final ConditionRepository conditionRepository;
    private final MealPlanRepository mealPlanRepository;

    public User createUser(UserDto userDto) {
        return userRepository.save(dtoToEntity(userDto));
    }

    public User updateUser(User user) {
        User found_user = userRepository.findById(user.getUser_id()).orElse(null);
        if (found_user != null) {
            found_user.setUsername(user.getUsername());
            found_user.setName(user.getName());
            found_user.setAge(user.getAge());
            found_user.setEmail(user.getEmail());
            found_user.setHeight(user.getHeight());
            found_user.setGender(user.isGender());
            found_user.setBody_fat(user.getBody_fat());
            found_user.setBmi(user.getBmi());
            found_user.setUser_goal(user.getUser_goal());
            found_user.setMealPlan(user.getMealPlan());
            return userRepository.save(found_user);
        }
        else
            return null;
    }

    public User addDietTypeToUser(DietType dietType, User user){
        User found_user = userRepository.findById(user.getUser_id()).orElse(null);
        if (found_user != null) {
            found_user.setDiet_type(dietType);
            return userRepository.save(found_user);
        }
        else
            return null;
    }

    public User addConditionToUser(Long condition_id, Long user_id){
        Condition condition = conditionRepository.findById(condition_id).orElse(null);
        User user = userRepository.findById(user_id).orElse(null);
        if (condition != null && user != null){
            List<User> newUsers = condition.getUsers();
            List<Condition> newConditions = user.getConditions();
            newConditions.add(condition);
            newUsers.add(user);
            user.setConditions(newConditions);
            condition.setUsers(newUsers);
            conditionRepository.save(condition);
            return userRepository.save(user);
        }else{
            return null;
        }
    }

    //TODO: Add exceptions
    public User addMealPlanToUser(Long user_id, Long meal_plan_id){
        MealPlan mealPlan = mealPlanRepository.findById(meal_plan_id).orElse(null);
        User user = userRepository.findById(user_id).orElse(null);
        if (mealPlan != null && user != null){
            user.setMealPlan(mealPlan);
            userRepository.save(user);
            return user;
        }
        else{
            return null;
        }
    }

    private User dtoToEntity(UserDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setName(userDto.getName());
        user.setAge(userDto.getAge());
        user.setEmail(userDto.getEmail());
        user.setHeight(userDto.getHeight());
        user.setGender(userDto.isGender());
        user.setBody_fat(userDto.getBody_fat());
        user.setBmi(userDto.getBmi());
        user.setUser_goal(userDto.getUser_goal());
        user.setDiet_type(userDto.getDiet_type());
        return user;
    }
}
