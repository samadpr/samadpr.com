
$("#submit-form").submit((e)=>{
    console.log(e)
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbw8iCT0f2M5hrTKbuWB_D9FtK9HXftjSFeEcZnWXyf9C5GLzytgtAAfmmTYGxICW9bqCw/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Thank you! Form submitted successfully.")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})