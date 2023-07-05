# Books App
## from Udemy course “Modern React with Redux [2023 Update]"
### This application is detailed in Sections 10 - 17 



Application screenshot:



## To run:
1. start app via npm start


### Props validation

We can use the prop-types package to validate the types of objects values passed as props into a component.  We have the following props passed into the Button component: 

{ children,
primary,
secondary,
success,
warning,
danger,
rounded,
outline}

We could theoretically validate each particular prop as a boolean type if necessary as follows.

```
// /components/Button.js

    Button.propTypes = {
        primary: PropTypes.bool,
        secondary: PropTypes.bool,
        someOtherStringProp: PropTypes.string,
    }
```

However that is not our goal.  Rather we want to ensure that only one of a given prop is passed to Button or return an error.  To do this, we can define a function by defining a parameter object for Component.propTypes within the js file that defines the Component.

```
// /components/Button.js

    Button.propTypes = {
        anyFunctionName: (props)=> {
            return new Error('Invalid prop type');
        }
```

For our Button component, we can convert undefined props to falsy values by using the !! operator and converting the false value to a 0 digit with Number().  In this way, we can total the number of true props to verify that only one of the given props are passed into Button.

```
// /components/Button.js

    Button.propTypes = {
        validatePropType: ({
            children,
            primary,
            secondary,
            success,
            warning,
            danger,
            rounded,
            outline})=> {
                const propsCount = Number(!!primary)
                + Number(!!secondary)
                + Number(!!success)
                + Number(!!warning)
                + Number(!!danger);
                
                if (propsCount > 1) {
                    return new Error('Only 1 of primary, secondary, success, warning, danger can be true');
                }
            }
    }

```

