public class LambdaPractice{
   
   public static void main(String[] args){

   	  Lambda l = (x, y) -> x + y;
   	  System.out.print(l.print("hello", "tumi"));

   }
}

interface Lambda{

	String print(String a, String b);
}