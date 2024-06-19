package com.haianh123.library;

import com.haianh123.library.dto.response.AuthorResponse;
import com.haianh123.library.dto.response.BooksResponse;
import com.haianh123.library.service.AuthorService;
import com.haianh123.library.service.BookService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class LibraryApplicationTests {

	@Autowired
	AuthorService authorService;
	@Test
	void contextLoads() {
		List<AuthorResponse> authorResponses = authorService.getAllAuthors();
		authorResponses.stream().map((author) ->{
			System.out.println(author.toString());
            return null;
        });
	}

}
