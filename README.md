# Tenant

Uses the Provider to create a global tenant code for the application.

Use useTenant to get the code and add as header to API requests

## Provider

At top level include the Provider - typically at App.js level

```javascript
import { TenantProvider } from "@cairnsgames/tenant";

...
<TenantProvider application={APP_ID}>
  ...
</TenantProvider>
...
```

## Getting Tenant Code

Wherever the code is needed make use of the hook

```javascript
import { useTenant } from "@cairnsgames/tenant";

const Component = () => {
    const { tenant } = useTenant();
    ...
    // use tenant code where needed, e.g. API calls
    console.log("Tenant Code: ", tenant)
}
```

## process.env

REACT_APP_TENANT_API=http://cairnsgames.co.za/dev/php/tenant/