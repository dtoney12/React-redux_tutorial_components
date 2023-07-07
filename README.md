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

### Passing Props with ...rest

The ...rest feature receives all remaining props unlisted by the props argument list of the component, collecting them into a new object (Actually I'm not sure if ...rest will actually be an object, or a list of each prop as its own object, based on console output).

When passing through the ...rest to the button component, className itself may be a prop that is passed to the component.  The rest.className argument allows concatenation of previously listed className props to other className(s) attribute specifiers specified in the className function.  

```
    //  pages/Buttonpage.js
    
    <Button className="mb-5" success onClick={handleClick}>
    
    // components/Button.js
    
    const classCSS = className(rest.className, ...
```

...rest should be listed first so that additional className(s) will concatenate with any previously passed className prop values.   

```
    //  components/Button.js
    
    return <button {...rest} className={classCSS} >{children}</button>

```

If className is listed first and then ...rest, the className prop will be overwritten by the identically named className prop passed into the functional component.  

With ...rest placed after className in the <button> component as in the following case, "mb-5" would overwrite 'flex items-center px-3 py-1.5 border m-2' + 'bg-green-500 border-green-600' because both strings are assigned to the className prop, and all of those additional css attributes would be lost, which is undesirable.

```
    //  pages/Buttonpage.js
    
    <Button className="mb-5" success ...
    
    //  components/Button.js
    
    const classCSS = className(rest.className, 'flex items-center px-3 py-1.5 border m-2', {
        ...
        'bg-green-500 border-green-600': success,
        
    ...
    
    return <button className={classCSS} {...rest}  >{children}</button>

```

