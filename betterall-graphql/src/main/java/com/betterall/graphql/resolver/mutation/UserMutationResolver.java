package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.Restriction;
import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.domain.dto.UserDto;
import com.betterall.graphql.repository.ConditionRepository;
import com.betterall.graphql.repository.RestrictionRepository;
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
    private final RestrictionRepository restrictionRepository;

    public User createUser(UserDto userDto) {
        return userRepository.save(dtoToEntity(userDto));
    }

    public User updateUser(User user) {
        User found_user = userRepository.findById(user.getUser_id()).orElse(null);
        if (found_user != null) {
            if(!user.getThird_party_id().isEmpty()){
                found_user.setThird_party_id(user.getThird_party_id());
            }
            if (!user.getProgram_id().isEmpty()){
                found_user.setProgram_id(user.getProgram_id());
            }
            if (!user.getProgram_name().isEmpty()){
                found_user.setProgram_name(user.getProgram_name());
            }
            if (!user.getUsername().isEmpty()){
                found_user.setUsername(user.getUsername());
            }
            if (!user.getName().isEmpty()){
                found_user.setName(user.getName());
            }
            if (user.getAge() != 0){
                found_user.setAge(user.getAge());
            }
            if (!user.getEmail().isEmpty()){
                found_user.setEmail(user.getEmail());
            }
            if (user.getStarting_weight() != 0){
                found_user.setStarting_weight(user.getStarting_weight());
            }
            if (user.getTarget_weight() != 0){
                found_user.setTarget_weight(user.getTarget_weight());
            }
            if (user.getHeight() != 0){
                found_user.setHeight(user.getHeight());
            }
            found_user.setGender(user.isGender());
            if (user.getBody_fat() != 0){
                found_user.setBody_fat(user.getBody_fat());
            }
            if (user.getBmi() != 0){
                found_user.setBmi(user.getBmi());
            }
            if (user.getDaily_calorie_intake() != 0){
                found_user.setDaily_calorie_intake(user.getDaily_calorie_intake());
            }
            if (user.getCalorie_deficit() != 0){
                found_user.setCalorie_deficit(user.getCalorie_deficit());
            }
            if (user.getTotal_daily_energy_expenditure() != 0){
                found_user.setTotal_daily_energy_expenditure(user.getTotal_daily_energy_expenditure());
            }
            if (user.getBasal_metabolic_rate() != 0){
                found_user.setBasal_metabolic_rate(user.getBasal_metabolic_rate());
            }
            found_user.setWeekly_weight_goal(user.getWeekly_weight_goal());
            found_user.setActivity_level(user.getActivity_level());
            if (!user.getConditions().isEmpty()){
                found_user.setConditions(user.getConditions());
            }
            found_user.setImperial(user.isImperial());
            if (!user.getTimezone().isEmpty()){
                found_user.setTimezone(user.getTimezone());
            }
            if (!user.getRestrictions().isEmpty()){
                found_user.setRestrictions(user.getRestrictions());
            }
            if (user.getHba1c() != 0){
                found_user.setHba1c(user.getHba1c());
            }
            if (user.getTotal_cholesterol() != 0){
                found_user.setTotal_cholesterol(user.getTotal_cholesterol());
            }
            if (user.getCholesterol_ldl() != 0){
                found_user.setCholesterol_ldl(user.getCholesterol_ldl());
            }
            if (user.getVitamin_d() != 0){
                found_user.setVitamin_d(user.getVitamin_d());
            }
            if (user.getVitamin_b12() != 0){
                found_user.setVitamin_b12(user.getVitamin_b12());
            }
            if (user.getCortisol() != 0){
                found_user.setCortisol(user.getCortisol());
            }
            if (user.getFerritin() != 0){
                found_user.setFerritin(user.getFerritin());
            }
            return userRepository.save(found_user);
        }
        else
            return null;
    }

    public User addConditionToUser(Long condition_id, Long user_id){
        Condition condition = conditionRepository.findById(condition_id).orElse(null);
        User user = userRepository.findById(user_id).orElse(null);
        if (condition != null && user != null) {
            List<User> newUsers = condition.getUsers();
            List<Condition> newConditions = user.getConditions();
            newConditions.add(condition);
            newUsers.add(user);
            user.setConditions(newConditions);
            condition.setUsers(newUsers);
            conditionRepository.save(condition);
            return userRepository.save(user);
        }
        else {
            return null;
        }
    }

    public User addRestrictionToUser(Long restriction_id, Long user_id){
        Restriction restriction = restrictionRepository.findById(restriction_id).orElse(null);
        User user = userRepository.findById(user_id).orElse(null);
        if (restriction != null && user != null) {
            List<User> newUsers = restriction.getUsers();
            List<Restriction> newRestrictions = user.getRestrictions();
            newRestrictions.add(restriction);
            newUsers.add(user);
            user.setRestrictions(newRestrictions);
            restriction.setUsers(newUsers);
            restrictionRepository.save(restriction);
            return userRepository.save(user);
        }
        else {
            return null;
        }
    }

    private User dtoToEntity(UserDto userDto) {
        User user = new User();
        user.setThird_party_id(userDto.getThird_party_id());
        user.setProgram_id(userDto.getProgram_id());
        user.setProgram_name(userDto.getProgram_name());
        user.setUsername(userDto.getUsername());
        user.setName(userDto.getName());
        user.setAge(userDto.getAge());
        user.setEmail(userDto.getEmail());
        user.setStarting_weight(userDto.getStarting_weight());
        user.setTarget_weight(userDto.getTarget_weight());
        user.setHeight(userDto.getHeight());
        user.setGender(userDto.isGender());
        user.setBody_fat(userDto.getBody_fat());
        user.setBmi(userDto.getBmi());
        user.setDaily_calorie_intake(userDto.getDaily_calorie_intake());
        user.setCalorie_deficit(userDto.getCalorie_deficit());
        user.setTotal_daily_energy_expenditure(userDto.getTotal_daily_energy_expenditure());
        user.setBasal_metabolic_rate(userDto.getBasal_metabolic_rate());
        user.setWeekly_weight_goal(userDto.getWeekly_weight_goal());
        user.setActivity_level(userDto.getActivity_level());
        user.setConditions(userDto.getConditions());
        user.setImperial(userDto.isImperial());
        user.setTimezone(userDto.getTimezone());
        user.setRestrictions(userDto.getRestrictions());
        user.setHba1c(userDto.getHba1c());
        user.setTotal_cholesterol(userDto.getTotal_cholesterol());
        user.setCholesterol_ldl(userDto.getCholesterol_ldl());
        user.setVitamin_d(userDto.getVitamin_d());
        user.setVitamin_b12(userDto.getVitamin_b12());
        user.setCortisol(userDto.getCortisol());
        user.setFerritin(userDto.getFerritin());
        return user;
    }
}
