class Lambda{

	public static void main(String[] args){

		// // useLambda lambda1 = () -> System.out.println("Hello!");
		// // lambda1.print();

		// useLambda lambda2 = (a,b) -> a + b;
		// int a2 = lambda2.print2(2,3);
		// System.out.println(a2);

		// useLambda lambda3 = (a,b) -> {return a + b;};
		// int a = lambda3.print2(4,8);
		// System.out.println(a);

		// useLambda lambda4 = (int c, int b) -> (a+b);
		// int a3 = lambda4.print2(8,1);
		// System.out.println(a3);

		// useLambda lambda5 = (Integer x, Integer y) -> {return x - y;};
		// int a4 = lambda5.print2(10,5);
		// System.out.println(a4);
	}
}

@FunctionalInterface
interface useLambda{

    

    // int print2(int a, int b);
}


// useLambda2 lambda2 = (String a, String b) -> { a = "Tumi"; b = "Maleka"; return a + " " +b;};
        
        // useLambda2 lambda3 = (x, y) -> {return x + " " + y;};
        // lambda3.type("Tumi", "Maleka");

        // useLambda3 lambda4 = a -> {return a;};

//@FunctionalInterface
// interface useLambda3{

// 	public int print(int a);
// }

// @FunctionalInterface
// interface useLambda2{

// 	public String type(String a, String b);

// }
