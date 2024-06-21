package pianocity.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService{
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    public Category update(Long id, Category category) {
        Optional<Category> updatedCategory = categoryRepository.findById(id);
        if(updatedCategory.isEmpty()){
            throw new IllegalStateException("Category with id" + id+ "doesn't exist");
        }
        updatedCategory.get().setName(category.getName());
        return categoryRepository.save(updatedCategory.get());
    }


    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(Long id) {
        Optional<Category> category= categoryRepository.findById(id);
        return category.orElse(null);
    }

    public void deleteById(Long id) {
        boolean exists = categoryRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("category with id" + id + "doesn't exist");
        }
        categoryRepository.deleteById(id);
    }


}
