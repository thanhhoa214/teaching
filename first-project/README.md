## Getting Started

Welcome to the VS Code Java world. Here is a guideline to help you get started to write Java code in Visual Studio Code.

## Folder Structure

The workspace contains two folders by default, where:

- `src`: the folder to maintain sources
- `lib`: the folder to maintain dependencies

Meanwhile, the compiled output files will be generated in the `bin` folder by default.

> If you want to customize the folder structure, open `.vscode/settings.json` and update the related settings there.

## Dependency Management

The `JAVA PROJECTS` view allows you to manage your dependencies. More details can be found [here](https://github.com/microsoft/vscode-java-dependency#manage-dependencies).

## Java OOP Concepts

1. **Class**: A class is a blueprint for creating objects. It defines a type of data with the data format and available procedures.

```java
public class Car {
    // Car properties and methods
}
```

2. **Object**: An object is an instance of a class. It has state and behavior.

```java
Car car = new Car();
```

3. **Inheritance**: Inheritance is a mechanism where a new class is derived from an existing class.
```java
public class SportsCar extends Car {
    // SportsCar properties and methods
}
```

4. **Polymorphism**: Polymorphism allows us to perform a single action in different ways. `overide` and `overload`
```java
public class Car {
    void run() {
        System.out.println("Car is running");
    }
}

public class SportsCar extends Car {
    @Override
    void run() {
        System.out.println("SportsCar is running fast");
    }
}

Car car = new SportsCar();
car.run();  // Outputs "SportsCar is running fast"
```

5. **Abstraction**: Abstraction is a process of hiding the implementation details and showing only functionality to the user.
```java
abstract class Car {
    abstract void run();
}

public class SportsCar extends Car {
    void run() {
        System.out.println("SportsCar is running fast");
    }
}
```
```java
interface Runnable {
    void run();
}
interface Stopable {
    void stop();
}

public class SportsCar implements Runnable, Stopable {
    void run() {
        System.out.println("SportsCar is running fast");
    }
}
```
6. **Encapsulation**: Encapsulation is wrapping the data (variables) and code acting on the data (methods) together as a single unit.
```java
public class Car {
    private String color;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
```