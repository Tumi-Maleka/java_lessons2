import java.util.List;
import java.util.Arrays;

public class AnonLambda2{

	public static void main(String[] args){
        
	   Integer[] intArray = new Integer[]{1,2,3,4,5};
	   List<Integer> list = Arrays.asList(intArray);

	   Numbers list2 = () -> list;
	   List<Integer> list3 = list2.display();
	   System.out.print(list3);

	   //list.forEach(numbers -> System.out.println(numbers));
	}   
}

@FunctionalInterface
interface Numbers{
  
   List<Integer> display();

}