/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.azure.iiot.opc.registry.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Result of an application registration.
 */
public class ApplicationRegistrationResponseApiModel {
    /**
     * New id application was registered under.
     */
    @JsonProperty(value = "id")
    private String id;

    /**
     * Get new id application was registered under.
     *
     * @return the id value
     */
    public String id() {
        return this.id;
    }

    /**
     * Set new id application was registered under.
     *
     * @param id the id value to set
     * @return the ApplicationRegistrationResponseApiModel object itself.
     */
    public ApplicationRegistrationResponseApiModel withId(String id) {
        this.id = id;
        return this;
    }

}