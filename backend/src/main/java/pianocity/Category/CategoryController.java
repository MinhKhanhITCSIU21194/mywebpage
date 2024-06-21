package pianocity.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/category")
public class CategoryController {
    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping(path = "/")
    public List<Category> getCategory() {
        return categoryService.getAllCategory();
    }

    @GetMapping(path = "/{id}")
    public Category getCategory(@PathVariable Long id) {
        return categoryService.getCategoryById(id);
    }

    @PostMapping(path = "/add")
    public Category addNewCategory(@RequestBody Category Category) {
        return categoryService.save(Category);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteCategory(@PathVariable("id") Long id) {
        categoryService.deleteById(id);
    }

    @PutMapping(path = "/update/{categoryId}")
    public Category updateCategory(@PathVariable("categoryId") Long categoryId, @RequestBody Category category) {
        return categoryService.update(categoryId, category);
    }
}
