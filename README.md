[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3aNDMX3O)
# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

# Runtime Analysis of Euler's Number Approximation Algorithm

## Overview of Operations

The algorithm primarily performs two operations within a loop that iterates \(n\) times:

1. **Factorial Calculation**:
   
    - The factorial is calculated iteratively within the loop. For each 
$i$ from $1$ to $n$, the algorithm multiplies the current factorial value $(fact)$ by $i$.

    - This calculation is done in constant time for each iteration of the loop because it involves a single multiplication operation.
    
2. **Sum**:
   
    - For each term, the function adds $\(\frac{1}{i!}\)$ to the total sum. Since the factorial of $i$ is already calculated previously, this addition also takes constant time per iteration.

## Time Complexity Analysis

  - Both steps within the loop (factorial calculation and summation) require constant time.
  - Since the loop runs $n$ times, the overall time complexity directly correlates with the number of terms $n$, leading to a linear relationship between the computational time and $n$.

## Worst-Case Big Theta Complexity

Considering the algorithm's design and its linear progression through $n$ terms, the worst-case time complexity is:

- $\Theta(n)\$

This shows that the time required to approximate Euler's number up to $n$ terms grows linearly with $n$, showing the efficiency of the dynamic programming approach.

## Conclusion

The worst-case $Θ$ time complexity of the dynamic programming algorithm for approximating Euler's number $e$ is $\Theta(n)\$. This analysis indicates that the execution time of the algorithm increases linearly with the number of terms $n$ used in the approximation, which is efficiently achieved by iteratively calculating factorial values within the loop.
