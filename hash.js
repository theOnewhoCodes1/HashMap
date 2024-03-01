
class HashMap{


    constructor(initial_length = 16){

        this.arr = new Array(initial_length);
        
        this.loadfactor = 0.75;

        this.size = 0 ;
    }
    
    hash(key){

        let hashCode = 0;
        
        let bucket_index = 0 ;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {

          
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            
            bucket_index += hashCode % this.arr.length;

        }
        
        return bucket_index;
    }
    set(key , value){

            const index = this.hash(key)

            const node = new Node(key , value);

           
            if(!this.arr[index]){

                console.log(`i saved ${node.data}`);
                this.arr[index] = new LinkedList(node);
                
                this.size ++ ;
            
            }else{

                const linked = this.arr[index];

                linked.append(node);

            }

            if( this.size/this.arr.length === this.loadfactor)
            {
                const new_length = this.arr.length*2;
                const newarr = new Array(new_length);


                for(let i=0; i<this.arr.length; i++){


                   const item = this.arr[i];

                   if(!item){

                        continue;
                   }
                   else{

                        let current = item.head;

                        while(current){

                            let hashCode = 0;
        
                            let bucket_index = 0 ;
                    
                            const primeNumber = 31;
                    
                            for (let i = 0; i < current.kleidi.length; i++) {
                    
                              
                                hashCode = primeNumber * hashCode + current.kleidi.charCodeAt(i);
                                
                                bucket_index += hashCode % newarr.length;
                    
                            }

                            if(!newarr[bucket_index]){

                                    newarr[bucket_index] = new LinkedList();
                            
                            }

                            newarr[bucket_index].append(current);

                            current = current.next ;
                        }
                   }

                }
                this.arr = newarr ;
            }
    }
    get(key){
            let flag = false ;
            // let index = this.hash(key);

            for(let x of this.arr){
                console.log(x);
                if(x === undefined){
                    continue;
                }
                    let current = x.head ;

                    if(current !== null ){
                            const length = x.size();
                            let reps = 0 ;

                            while(current !== null ){

                                reps ++ ;
                                console.log("Comparing:", current, "with", key);
                                if(current.kleidi === key){
                                    
                                    flag = true ;
                                    return current.data ;

                                }


                                current = current.next ;
                            }

                            if(reps === length ){
                               continue;
                            }
                }else{
                    continue;
                }
        }
        if(flag === false ){
            return null ;
        }
    }
    has(key){

        let flag = false ;

        for(let x of this.arr){


                if(x === undefined){
                    continue ;
                }

                let current = x.head;
                
                    while( current !== null ){

                        console.log(current);
                        if( current.kleidi === key){
                            flag = true ;
                        }

                        current = current.next ;
                    }


        }
        return flag;
    
    }
    remove(key){
            const found = this.has(key);
            if(!found){
                return false;
            }
            for(let x of this.arr ){

                        if(x === undefined){
                            continue ;
                        }       
                        if(x.head !== null && x.head.kleidi === key ){
                            
                            x.head = x.head.next ;
                            return true;
                            break;
                        }
                        let current = x.head ;

                        let previous = null ;

                        while( current !== null){
                            
                            if(current.kleidi === key){

                              
                                previous.next = current.next; 
                                
                                return true ;
                            }
                            previous = current ;
                            current = current.next;
                        }

                }

            }   
           
    }
class Node{

    constructor(kleidi , data){

        this.kleidi = kleidi ;
        this.data = data;
        this.next = null;
    }
}

class LinkedList{

    constructor(head = null){
        this.head = head;
    }

    append(value){
            
        if (!this.head) {
            this.head = value;
            return;
        }
    
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = value;
        
    }

    size(){
        let current = this.head ;

        let reps = 0 ;
        while(current !== null ){
         
            reps ++ ;
            current = current.next ;
        }
        return reps;
    }
}

const hp = new HashMap()
console.log(hp.arr.length);
// const key = hp.hash('john');
hp.set('john' , 29);
console.log(hp.arr.length);
// const key1 = hp.hash('john');
hp.set('akis', 2);
console.log(hp.arr.length);

console.log(hp.get('akis'));
console.log(hp.has('b'));
console.log(hp.remove('b'));
console.log(hp.remove('akis'));
console.log(hp.has('akis'));