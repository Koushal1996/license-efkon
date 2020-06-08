package com.nxtlife.efkon.license.util;

import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfPageEventHelper;

public class PdfHeaderFooterPageEvent extends PdfPageEventHelper {

	public String heading;
	public PdfPTable headerPdfTable;
	public String generatedDate;

	public PdfHeaderFooterPageEvent(String heading, PdfPTable headerPdfTable, String generatedDate) {
		this.headerPdfTable = headerPdfTable;
		this.heading = heading;
		this.generatedDate = generatedDate;
	}

}
