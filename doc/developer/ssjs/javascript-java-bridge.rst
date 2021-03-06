.. _invoking_java:

Invoking Java
=============

In Enonic XP, there is a standard object named ``__`` (double underscore), accessible from any serverside JavaScript code, which provides
a way to wrap Java objects in a JavaScript object.  The ``__`` object has functions that allow JavaScript to communicate with Java
classes. The ``newBean`` function will wrap the Java object named in the parameter, for instance:

.. code-block:: javascript

   var bean = __.newBean('com.enonic.xp.lib.io.IOHandlerBean');

This line is from the ``lib-io`` library, which is a good example of how this is used. In the Java ``IOHandlerBean`` class, there are several
methods, like the ``readLines`` method:

.. code-block:: java

   public List<String> readLines( final Object value )
       throws Exception
   {
       final CharSource source = toCharSource( value );
       return source.readLines();
   }

This method is now accessible as a function on the JavaScript ``bean`` and may be invoked from JavaScript, like this:

.. code-block:: javascript

   exports.readLines = function (stream) {
       return __.toNativeObject(bean.readLines(stream));
   };

This results in a global JavaScript function ``readLines``. This example also shows the use of the ``toNativeObject`` method, which in
this case, converts a Java String array to a JSON object.
The reference documentation for the ``__`` object can be found here: `The __ object`_.

.. _The __ object: http://repo.enonic.com/public/com/enonic/xp/docs/${release}/docs-${release}-libdoc.zip!/-__.html
