package com.nxtlife.efkon.license.util;

import com.itextpdf.text.Document;

public interface ITextPdfUtil {

	public static void setDocumentProperties(Document document) {
		document.addAuthor("Efkon");
		document.addCreationDate();
		document.addTitle("License Report");
	}

	public static void setProjectProductDocumentProperties(Document document) {
		document.addAuthor("Efkon");
		document.addCreationDate();
		document.addTitle("Project Product Report");
	}

}
