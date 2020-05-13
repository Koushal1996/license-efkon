package com.nxtlife.efkon.license.service;

import java.net.MalformedURLException;
import java.nio.file.Paths;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;

public interface FileStorageService<T> {

	public static Resource fetchFile(String filePath) {
		try {
			Resource resource = new UrlResource(Paths.get(filePath).toUri());
			if (resource.exists()) {
				return resource;
			} else {
				throw new NotFoundException("File not found");
			}
		} catch (MalformedURLException e) {
			throw new ValidationException("Error in reading file");
		}
	}

}
