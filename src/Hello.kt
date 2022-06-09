import java.util.*

fun main()
{
 /*   var language = "java"  //able to change the value
    val salary = 3000;    //cam't be changed value 
    var lan:String //valuable with data type 
    println("Hello world")
    var num1:Int=100
    var num2:Int=500
    println(num1+num2)
    println("Addition of two numbers is ${num1+num2}")
    System.out.println("Hello Darling")
    //$ and + is used for the String concartation 
    println("the language is $language")
*/
    // '/n' '/t' '/b'
    var number:Double= 100.0
    number.compareTo(10)
    println(number)
    //if(number.compareTo(10))
    var sen:String="""   //;print the line in the same sequence
        hello
        singh
        how are you?/
        Hope you are fine??
    """.trimIndent()
    println(sen)
    var num=500
    var num2:Long= num.toLong() //like to string in java
    //num.toDouble()
    //num.toInt()
    //input a value fron the user in kotlin
    println("Enter your name")
    var name = readLine()
    var n = readln()
    var input = Scanner(System.`in`)
    var age = Integer.valueOf(readLine()) //it will only take integer as youput
}
