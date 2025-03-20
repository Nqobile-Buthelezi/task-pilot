const { addTask, removeTask, toggleTaskCompletion } = require( "../src/js/app" );

describe( "Task Management", () => {

    let tasks;

    beforeEach( () => {
        tasks = [ { id: 1, title: "Test Task", completed: false } ];
    })

    test( "Should add a new task.", () => {
        const newTask = { id: 2, title: "Second Test Task", completed: false };

        const updatedTasks = addTask( tasks, newTask );

        expect( updatedTasks.length ).toBe( 2 );
        expect( updatedTasks[ 1 ] ).toEqual( newTask );
    });

    test( "Should be able to read the title.", () => {
        expect( tasks[ 0 ].title ).toBe( "Test Task" );
    });

    test("Should toggle task completion status", () => {
        const taskIdToToggle = 1;
        const updatedTasks = toggleTaskCompletion( tasks, taskIdToToggle );
        
        expect( updatedTasks.length ).toBe( 1 );
        expect( updatedTasks[ 0 ].completed ).toBe( true );
    });

    test( "Should remove a task", () => {
        const taskIdToRemove = 1;

        const updatedTasks = removeTask( tasks, taskIdToRemove );

        expect( updatedTasks.length ).toBe( 0 );
    });

});

