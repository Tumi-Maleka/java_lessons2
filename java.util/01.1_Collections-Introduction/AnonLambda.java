public class AnonLambda{

   public static void main(String[] args){

         Printer p = new Printer(){

         	public void print(String a, int b){

         		System.out.println(a + b);
         	}

         	public int add(int a, int b){
         	    return (a + b);
         	}

         	public String rain(){
         		return "pitter patter, pitter patter";
         	}

         };
         	
        p.print("Book", 1);

        int i = p.add(3, 10);
        System.out.println(i);

        String s = p.rain();
        System.out.print(s);
   }
}

interface Printer{

	void print(String a, int b);
	int add(int a, int b);
	String rain();
}