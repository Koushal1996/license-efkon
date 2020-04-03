package com.nxtlife.efkon.license.view.version;

import com.nxtlife.efkon.license.entity.version.Version;
import io.swagger.v3.oas.annotations.media.Schema;

public class VersionResponse {

    @Schema(description = "Version of the product", example = "2.2")
    private String version;

    public VersionResponse(String version) {
        super();
        this.version = version;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public static VersionResponse get(Version version) {
        if (version != null) {
            return new VersionResponse(version.getVersion());
        }
        return null;
    }

}
